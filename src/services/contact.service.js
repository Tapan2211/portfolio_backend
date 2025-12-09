import Contact from '../models/contact.model.js';

export const createMessage = async (data) => {
    const { name, email, message } = data;

    if (!name || !email || !message) {
        throw new Error("All fields are required");
    }

    const msg = await Contact.create({
        name,
        email,
        message
    });

    return msg;
}

export const getAllMessage = async () => {
    return await Contact.find().sort({ createdAt: - 1 });
}

export const getMessageById = async (id) => {
    const msg = await Contact.findById(id);
    if (!msg) throw new Error("Message not found");
    return msg;
}

export const deleteMessage = async (id) => {
    const msg = await Contact.findByIdAndDelete(id);
    if (!msg) throw new Error("Message not found");
    return msg;
}