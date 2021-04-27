"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedback = exports.getFeedbackByReviewee = exports.getEmptyFeedbackByReviewer = exports.getFeedbackByReviewer = exports.updateFeedback = exports.addFeedback = exports.updateReview = exports.addReview = exports.getReviews = void 0;
const postgrePoolConnector_1 = require("./postgrePoolConnector");
function getReviews() {
    const queryString = `Select * from reviews`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.getReviews = getReviews;
function addReview(title) {
    const queryString = `insert into reviews values ('${title}');`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.addReview = addReview;
function updateReview(title, newTitle) {
    const queryString = `update reviews set title = '${newTitle}' where title = '${title}';`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.updateReview = updateReview;
function addFeedback(reviewee, reviewer, title) {
    const queryString = `insert into feedback values ('${reviewee}', '${reviewer}', null, '${title}');`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.addFeedback = addFeedback;
function updateFeedback(reviewee, reviewer, title, feedback) {
    const queryString = `update feedback set feedback = '${feedback}' where (reviewee = '${reviewee}' AND reviewer = '${reviewer}' AND title = '${title}');`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.updateFeedback = updateFeedback;
function getFeedbackByReviewer(reviewer) {
    const queryString = `select * from feedback where reviewer = '${reviewer}';`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.getFeedbackByReviewer = getFeedbackByReviewer;
function getEmptyFeedbackByReviewer(reviewer) {
    const queryString = `select * from feedback where reviewer = '${reviewer}' AND feedback IS NULL;`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.getEmptyFeedbackByReviewer = getEmptyFeedbackByReviewer;
function getFeedbackByReviewee(reviewee) {
    const queryString = `select * from feedback where reviewee = '${reviewee}';`;
    return postgrePoolConnector_1.runQuery(queryString);
}
exports.getFeedbackByReviewee = getFeedbackByReviewee;
function getFeedback(reviewee, reviewer, status) {
    if (reviewee)
        return this.getFeedbackByReviewee(reviewee);
    else if (status === 'incomplete' && reviewer)
        return this.getEmptyFeedbackByReviewer(reviewer);
    else if (reviewer)
        return this.getFeedbackByReviewer(reviewer);
    else
        return postgrePoolConnector_1.runQuery('select * from feedback;');
}
exports.getFeedback = getFeedback;
//# sourceMappingURL=feedback.queries.js.map