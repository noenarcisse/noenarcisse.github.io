export type ProjectCardData = {
    id: number;
    title: string;
    subtitle: string;
    summary: string;
    url: string;
    stack: string;
    page: string;
    isShown: boolean;
    isShownDev: boolean;
    logo: string;
    color: string;
    imgbg: string;
}

export type ProjectCardRow = {
    title?: string;
    subtitle?: string;
    summary?: string;
    url?: string;
    stack?: string;
    page?: string;
    isShown?: string | number;
    isShownDev?: string | number;
    logo?: string;
    color?: string;
    imgbg?: string;
}

export function isProjectCard(row: unknown): row is ProjectCardRow {
    return (
        row !== null &&
        typeof row === 'object' &&
        'title' in row && typeof row.title === 'string' &&
        'summary' in row && typeof row.summary === 'string' &&
        'url' in row && typeof row.url === 'string' &&
        'stack' in row && typeof row.stack === 'string' &&
        'logo' in row && typeof row.logo === 'string' &&
        'color' in row && typeof row.color === 'string' &&
        'imgbg' in row && typeof row.imgbg === 'string' &&
        'isShown' in row && (Number(row.isShown) === 0 || Number(row.isShown) === 1) &&
        'isShownDev' in row && (Number(row.isShownDev) === 0 || Number(row.isShownDev) === 1)
    );
}