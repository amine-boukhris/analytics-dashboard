// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
        // track analytics event
        // using a try-catch block so it doesn't interfere with the user when an error occurs
        try {

            analytics.track('pageview', {
                page: '/',
                country: req.geo?.country,
            })

        } catch (err) {
            console.error(err);
            // just logging, we don't want to stop the process of accessing page just because we failed to track it
        }
    }
    return NextResponse.next();
}

export const matcher = {
    matcher: ['/']
}