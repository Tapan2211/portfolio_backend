import { createProject, getAllProjects, getProjectById, updateProjetById, deleteProject } from "../services/project.service.js";

export const createProjectP = async (req, res) => {
    try {
        const { title, description, techStack, githubLink, liveLink, category } = req.body;

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        const project = await createProject({
            title,
            description,
            techStack,
            image: imageUrl,
            githubLink,
            liveLink,
            category
        });
        res.status(201).json({
            message: "Project created successfully",
            project
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const getAllProjectsP = async (req, res) => {
    try {
        const project = await getAllProjects();
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const getProjectByIdP = async (req, res) => {
    try {
        const project = await getProjectById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const updateProjectP = async (req, res) => {
    try {
        const { title, description, techStack, githubLink, liveLink, category } = req.body;

        const updateData = {};

        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (githubLink) updateData.githubLink = githubLink;
        if (liveLink) updateData.liveLink = liveLink;
        if (category) updateData.category = category;

        if (techStack) {
            updateData.techStack = techStack
                .split(",")
                .map(t => t.trim());
        }

        if (req.file) {
            updateData.image = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        }

        const project = await updateProjetById(req.params.id, updateData);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({
            message: "Project updated successfully",
            project
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const deleteProjectP = async (req, res) => {
    try {
        const project = await deleteProject(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}