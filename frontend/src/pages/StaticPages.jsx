import React from 'react';
import Layout from '../components/Layout';

const StaticLayout = ({ title, children }) => (
    <Layout>
        <div className="max-w-3xl mx-auto py-12">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-4 inline-block">{title}</h1>
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-serif leading-relaxed">
                {children}
            </div>
        </div>
    </Layout>
);

export const OurStory = () => (
    <StaticLayout title="Our Story">
        <p className="lead text-xl text-slate-900 font-medium mb-6">
            Bridging the gap between the informal spark of an idea and the formal rigidity of a journal publication.
        </p>
        <p>
            Founded in early 2025, <strong>AcademicBlog</strong> emerged from a frustration common among researchers: the "publication lag." 
            We noticed that brilliant ideas often languish in notebooks for years before seeing the light of day. We wanted to create a space that celebrates 
            the <em>process</em> of research, not just the final result.
        </p>
        <p>
            What started as a small internal tool for a computer science department has grown into a cross-disciplinary platform where 
            physicists, historians, and sociologists share preliminary findings, methodology critiques, and theoretical musings.
        </p>
        <p>
            Our mission is simple: <strong>Open Knowledge, Faster.</strong> By allowing researchers to publish "micro-papers" and "pre-prints" 
            in a blog format, we accelerate the global conversation and foster collaboration across borders.
        </p>
    </StaticLayout>
);

export const Documentation = () => (
    <StaticLayout title="Documentation & Help">
        <h3>Getting Started</h3>
        <p>
            Welcome to the AcademicBlog platform. To begin contributing, you must first register for a researcher account. 
            Once authenticated, you will have access to the <strong>Dashboard</strong> and <strong>Submission Tools</strong>.
        </p>

        <h3>Platform Features</h3>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>The Feed:</strong> A curated list of the latest submissions from across the network.</li>
            <li><strong>Rich Text Editor:</strong> Our editor supports standard academic formatting including blockquotes and code blocks.</li>
            <li><strong>Image Support:</strong> Upload high-resolution figures, charts, and diagrams directly to your posts.</li>
            <li><strong>Profile Management:</strong> Maintain a professional bio, list your institution, and track your publication history.</li>
        </ul>

        <h3>Markdown Support</h3>
        <p>
            We support standard formatting. You can paste your abstract directly from LaTeX or Word. 
            Currently, mathematical rendering (LaTeX) is in beta.
        </p>
    </StaticLayout>
);

export const SubmissionGuidelines = () => (
    <StaticLayout title="Submission Guidelines">
        <p className="text-lg mb-6">
            We maintain high standards for content. While we are faster than journals, we are not a social network. 
            Please adhere to the following guidelines to ensure your work remains published.
        </p>

        <h4>1. Content Standards</h4>
        <p>
            All submissions must be <strong>academic in nature</strong>. This includes research findings, literature reviews, 
            methodology proposals, or critical analyses. Personal blog posts or non-academic opinions may be removed.
        </p>

        <h4>2. Citation & Integrity</h4>
        <p>
            <strong>Plagiarism is strictly prohibited.</strong> If you reference external work, you must cite it. 
            While we do not enforce a specific citation style (APA, MLA, Chicago), we ask for consistency within your post.
        </p>

        <h4>3. Visual Assets</h4>
        <p>
            Ensure you own the copyright to any images, charts, or figures you upload. If using third-party data visualisations, 
            provide appropriate credit in the caption.
        </p>

        <h4>4. Civility</h4>
        <p>
            Academic discourse can be spirited, but it must remain professional. Ad hominem attacks or hate speech 
            in posts will result in immediate account suspension.
        </p>
    </StaticLayout>
);

export const PrivacyPolicy = () => (
    <StaticLayout title="Privacy Policy">
        <p className="text-sm text-slate-500 mb-4">Last Updated: December 17, 2025</p>
        
        <h3>1. Information We Collect</h3>
        <p>
            We collect information you provide directly to us. This includes:
        </p>
        <ul>
            <li><strong>Account Data:</strong> Your name, email address, and encrypted password.</li>
            <li><strong>Profile Data:</strong> Your institution, bio, and profile photograph.</li>
            <li><strong>Content Data:</strong> The text and images of the articles you publish.</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>
            We use your data solely to provide the Service. We do not sell your personal data to advertisers. 
            Your email is used for account recovery and essential service notifications only.
        </p>

        <h3>3. Data Retention</h3>
        <p>
            We retain your content as long as your account is active. You may request account deletion at any time, 
            which will permanently scrub your personal data from our servers (though published articles may remain archived if they have been cited).
        </p>
    </StaticLayout>
);

export const TermsOfService = () => (
    <StaticLayout title="Terms of Service">
        <p>By accessing AcademicBlog, you agree to be bound by these Terms.</p>

        <h3>1. Intellectual Property</h3>
        <p>
            <strong>You retain ownership of your content.</strong> By posting on AcademicBlog, you grant us a non-exclusive, 
            worldwide license to display, distribute, and promote your content within the platform. You verify that you have 
            the right to publish this content.
        </p>

        <h3>2. User Conduct</h3>
        <p>
            You agree not to misuse the Service. This includes attempting to compromise the security of the platform, 
            scraping data without permission, or harassing other researchers.
        </p>

        <h3>3. Disclaimer</h3>
        <p>
            The content on this platform is user-generated. AcademicBlog makes no warranties regarding the accuracy 
            or reliability of the research findings published here. Peer review is the responsibility of the community.
        </p>
    </StaticLayout>
);

export const CookiePolicy = () => (
    <StaticLayout title="Cookie Policy">
        <p>
            We believe in transparency. This policy explains how and why we use cookies.
        </p>

        <h3>Essential Cookies</h3>
        <p>
            We use a minimal set of cookies required for the site to function:
        </p>
        <ul>
            <li><strong>Authentication Tokens:</strong> We store secure tokens (`access` and `refresh`) to keep you logged in.</li>
            <li><strong>Session Preferences:</strong> We may store simple preferences like your last visited feed filter.</li>
        </ul>

        <h3>No Tracking</h3>
        <p>
            We do <strong>not</strong> use third-party tracking cookies, advertising pixels, or analytics beacons that follow you across the web. 
            Your reading habits on AcademicBlog are your own business.
        </p>
    </StaticLayout>
);
