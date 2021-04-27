"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = require("express");
const feedbackQueries = __importStar(require("../lib/feedback.queries"));
exports.reviewRouter = express_1.Router();
exports.reviewRouter.get('/review', (req, res) => {
    feedbackQueries.getReviews()
        .then(reviews => res.status(200).send(reviews))
        .catch(err => res.status(400).send(err));
});
exports.reviewRouter.post('/review', (req, res) => {
    feedbackQueries.addReview(req.body.title)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.reviewRouter.put('/review/:title', (req, res) => {
    feedbackQueries.updateReview(req.params.title, req.body.newTitle)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.reviewRouter.post('/review/:title', (req, res) => {
    feedbackQueries.addFeedback(req.body.reviewee, req.body.reviewer, req.params.title)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.reviewRouter.put('/review/:title/:reviewee/:reviewer', (req, res) => {
    feedbackQueries.updateFeedback(req.params.reviewee, req.params.reviewer, req.params.title, req.body.feedback)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});
exports.reviewRouter.get('/review/feedback', (req, res) => {
    feedbackQueries.getFeedback(req.query.reviewee, req.query.reviewer, req.query.status)
        .then((feedbacks) => res.status(200).send(feedbacks))
        .catch(err => res.status(400).send(err));
});
//# sourceMappingURL=review.routes.js.map