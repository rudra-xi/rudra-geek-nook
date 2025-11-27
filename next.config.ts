import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
};

export default withNextVideo(nextConfig, { folder: "src/videos" });
