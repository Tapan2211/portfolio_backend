import slugify from "slugify";
import { createBlog, getAllBlogs, getBlogBySlug, updateBlogById, deleteBlogById } from "../services/blog.service.js";

export const creatBlogController = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        const slug = slugify(title, { lower: true });
        const blog = await createBlog({
            title,
            slug,
            content,
            tags,
            image: imageUrl
        });
        res.status(201).json({
            message: "Blog created successfully",
            blog
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBlogsController = async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBlogBySlugController = async (req, res) => {
    try {
        const blog = await getBlogBySlug(req.params.slug);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBlogController = async (req, res) => {
    try {
        const { title, content, tags } = req.body;

        const updateData = {
            title,
            content,
            tags
        };

        if (req.file) {
            const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            updateData.image = imageUrl;
        }
        const blog = await updateBlogById(req.params.id, updateData);
        res.status(200).json({
            message: "Blog updated successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBlogController = async (req, res) => {
    try {
        const blog = await deleteBlogById(req.params.id);
        res.status(200).json({ message: "Blog deleted successfully", blog });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}