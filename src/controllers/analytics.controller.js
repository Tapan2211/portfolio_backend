import { recordAnalytics, getAnalyticsStats } from "../services/analytics.service.js";

export const trackVisit = async (req, res) => {
    try {
        const { type, page, projectId } = req.body;

        await recordAnalytics({
            type,
            page,
            projectId: projectId || null,
            refferer: req.get("refferer") || "direct",
            ipAddress: req.ip,
            userAgent: req.get("user-agent")
        });

        res.status(201).json({ message: "Analytics recorded" })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const fetchAnalyticsStats = async (req, res) => {
    try {
        const stats = await getAnalyticsStats();
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};