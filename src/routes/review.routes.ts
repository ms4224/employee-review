import {Router} from 'express';
import * as feedbackQueries from '../lib/feedback.queries';

export const reviewRouter = Router();

reviewRouter.get('/review', (req, res) => {
    feedbackQueries.getReviews()
        .then(reviews => res.status(200).send(reviews))
        .catch(err => res.status(400).send(err));
});

reviewRouter.post('/review', (req, res) => {
    feedbackQueries.addReview(req.body.title)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});

reviewRouter.put('/review/:title', (req, res) => {
    feedbackQueries.updateReview(req.params.title, req.body.newTitle)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
});

reviewRouter.post('/review/:title', (req, res) => {
    feedbackQueries.addFeedback(req.body.reviewee, req.body.reviewer, req.params.title)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
})

reviewRouter.put('/review/:title/:reviewee/:reviewer', (req, res) => {
    feedbackQueries.updateFeedback(req.params.reviewee, req.params.reviewer, req.params.title, req.body.feedback)
        .then(() => res.status(200).send())
        .catch(err => res.status(400).send(err));
})