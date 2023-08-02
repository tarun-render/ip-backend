import { PrismaService } from '../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
export declare class BookmarkService {
    private prisma;
    constructor(prisma: PrismaService);
    getBookmarks(userId: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Bookmark[]>;
    getBookmarkById(userId: string, bookmarkId: string): import(".prisma/client").Prisma.Prisma__BookmarkClient<import(".prisma/client").Bookmark, never>;
    createBookmark(userId: string, dto: CreateBookmarkDto): Promise<import(".prisma/client").Bookmark>;
    editBookmarkById(userId: string, bookmarkId: string, dto: EditBookmarkDto): Promise<import(".prisma/client").Bookmark>;
    deleteBookmarkById(userId: string, bookmarkId: string): Promise<void>;
}
