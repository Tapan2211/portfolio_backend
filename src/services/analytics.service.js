import Analytics from '../models/analytics.model.js';

export const recordAnalytics = async (data) => {
    return await Analytics.create(data);
};

export const getAnalyticsStats = async () => {
    const totalVisits = await Analytics.countDocuments({ type: "visit" });
    const projectViews = await Analytics.countDocuments({ type: "project_view" });
    const contactClicks = await Analytics.countDocuments({ type: "contact_click" });

    return {
        totalVisits,
        projectViews,
        contactClicks
    }
}