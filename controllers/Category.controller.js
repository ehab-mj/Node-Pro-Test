import { upload } from "../middlewares/upload.mw";
import router from "../routes/api.router";
import handleError from "../utils/handleError";

router.post("/image", auth, upload(uploadPath), async (req, res) => {
    if (!req.file) return handleError(res, BAD_REQUEST, "no file");
    return res.status(OK).json({
        message: 'File was uploaded',
        url: `/assets/imgs/${req.file.filename}`
    })
})





export {

};
