

export interface childrenProp {
    children: React.ReactNode
}

export interface SidebarLinkProps extends childrenProp {
    clicked?: boolean
}

export interface User {
    user: UserData
}

export interface UserData {
    id: Number,
    firstName: string,
    lastName: string,
    middleName?: string,
    nationality: string,
    education: Education
    hashtags: string[],
    tags: string[],
    workExperience: Experience[];
    email?: string
    tel?: string;
    nationalId?: string;
    dateOfBirth?: string;
    gender?: string;
    
}

interface Education {
    degree: string,
    from: string,
    to: string,
    school: string,
    location: string
}

interface Experience {
    id: Number,
    companyName: string,
    position: string,
    location: string,
    from: string,
    to: string
}