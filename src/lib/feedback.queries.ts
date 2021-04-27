import { runQuery } from "./postgrePoolConnector";

export function getReviews(): Promise<IReview[]> {
    const queryString = `Select * from reviews`;
    return runQuery<IReview>(queryString);
}

export function addReview(title: string): Promise<any[]> {
    const queryString = `insert into reviews values ('${title}');`;
    return runQuery(queryString);
}

export function updateReview(title: string, newTitle: string): Promise<any[]> {
    const queryString = `update reviews set title = '${newTitle}' where title = '${title}';`;
    return runQuery(queryString);
}

export function addFeedback(reviewee: string, reviewer: string, title: string): Promise<any[]> {
    const queryString = `insert into feedback values ('${reviewee}', '${reviewer}', null, '${title}');`;
    return runQuery(queryString);
}

export function updateFeedback(reviewee: string, reviewer: string, title: string, feedback: string): Promise<any[]> {
    const queryString = `update feedback set feedback = '${feedback}' where (reviewee = '${reviewee}' AND reviewer = '${reviewer}' AND title = '${title}');`;
    return runQuery(queryString);
}

export function getFeedbackByReviewer(reviewer: string): Promise<IFeedback[]> {
    const queryString = `select * from feedback where reviewer = '${reviewer}';`;
    return runQuery(queryString);
}

export function getFeedbackByReviewee(reviewee: string): Promise<IFeedback[]> {
    const queryString = `select * from feedback where reviewee = '${reviewee}';`;
    return runQuery(queryString);
}

export function getFeedback(reviewee?: string, reviewer?: string): Promise<IFeedback[]> {
    if (reviewee) return this.getFeedbackByReviewee(reviewee);
    else if (reviewer) return this.getFeedbackByReviewer(reviewer);
    else return runQuery('select * from feedback;');
}