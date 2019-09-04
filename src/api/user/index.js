import { Router } from 'express';

const router = new Router();

router.post('/',
    (req, res) => {
        console.log("This is authenticaltion middleware");
    },
    (req, res) => {
        console.log("This is after authentication middleware");

    })


export default router;