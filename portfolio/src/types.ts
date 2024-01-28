// interfavce voor blog
export interface Post{
    id:number
    category:string,
    title:string,
    description:string,
    text:string
    author:string,
    date:string,
    img:string,
    authorId:number
}



export interface RootObjectBlogs {
    data: Datum[];
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    category:    string;
    title:       string;
    description: string;
    date:        string;
    text:        string;
    author:      string;
    img:         Img;
}

export interface Img {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}


// blog detail 
export interface RootObjectBlogItem {
    data: RootObjectBlogItemData;
}

export interface RootObjectBlogItemData {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    category:    string;
    title:       string;
    description: string;
    date:        string;
    text:        string;
    author:      string;
    img:         Img;
}