import { createMessage, getAllMessage, getMessageById, deleteMessage } from '../services/contact.service.js';

export const submitContact = async (req, res) => {
    try {
        const msg = await createMessage(req.body);
        res.status(201).json({
            message: "Message submitted successfully",
            data: msg
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getMessages = async (req, res) => {
    try {
        const msg = await getAllMessage();
        if (!msg || !msg.length === 0) {
            return res.status(200).json({
                message: "No record found",
                count: 0,
                data: []
            })
        }
        res.status(200).json({
            message: "Contacts fetched successfully",
            count: msg.length,
            data: msg
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getMessage = async (req, res) => {
    try {
        const msg = await getMessageById(req.params.id);
        res.status(200).json(msg);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const removeMessage = async (req, res) => {
    try {
        await deleteMessage(req.params.id);
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};