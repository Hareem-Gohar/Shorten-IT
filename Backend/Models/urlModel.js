import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiryDate: {
        type: Date
    }
});

urlSchema.index({ expiryDate: 1 }, { expireAfterSeconds: 0 });
const urlModel = mongoose.model("URL", urlSchema);
export default urlModel;
