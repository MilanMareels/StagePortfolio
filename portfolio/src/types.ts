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
    meta: Meta;
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
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
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
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    large?:    Large;
    medium:    Large;
}

export interface Large {
    name:              string;
    hash:              string;
    ext:               string;
    mime:              string;
    path:              null;
    width:             number;
    height:            number;
    size:              number;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}





// blog detail 
export interface RootObjectBlogItem {
    data: RootObjectBlogItemData;
    meta: Meta;
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
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    author:      string;
    img:         Img;
}

export interface Img {
    data: ImgData;
}

export interface ImgData {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}



export interface Large {
    name:              string;
    hash:              string;
    ext:               string;
    mime:              string;
    path:              null;
    width:             number;
    height:            number;
    size:              number;
    url:               string;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: string;
}