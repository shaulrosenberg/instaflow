import { User } from "./user.model"

interface Comment {
    id: string;
    by: User;
    txt: string;
    likedBy?: User[];
}

interface Location {
    lat: number;
    lng: number;
    name: string;
}

interface Pst {
    _id: string;
    txt: string;
    imgUrl: string;
    uploadTime: string;
    by: User;
    loc?: Location;
    comments: Comment[];
    likedBy: User[];
    tags: string[];
}

export default Pst;