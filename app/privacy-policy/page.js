import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="bg-background text-foreground">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <article>
                        <header className="text-center mb-4">
                            <h1>Privacy Policy</h1>
                        </header>
                        <section>
                            <h2>1. User Responsibilities</h2>
                            <h3>Eligibility</h3>
                            <p>You must be at least 13 years old to use this Blog. By using the Blog, you represent and warrant that you meet this age requirement.</p>

                            <h3>User Account</h3>
                            <p>If you are a guest author and create an account on our Blog, you are responsible for keeping your account information confidential and for all activity under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

                            <h3>Prohibited Activities</h3>
                            <p>You agree not to engage in any of the following prohibited activities:</p>
                            <ul>
                                <li>Posting spam or irrelevant content</li>
                                <li>Harassing or threatening other users</li>
                                <li>Impersonating any person or entity</li>
                                <li>Violating any applicable laws or regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2>2. Content Ownership</h2>
                            <h3>Blog Content</h3>
                            <p>All content published on the Blog, including text, images, and videos, is the property of TechChain and is protected by copyright and other intellectual property laws.</p>

                            <h3>User-Generated Content</h3>
                            <p>Users may not submit content. Only guest authors may publish content on the Blog.</p>
                        </section>

                        <section>
                            <h2>3. Intellectual Property</h2>
                            <p>All trademarks, logos, and service marks displayed on the Blog belong to TechChain or third parties. You may not use them without our prior written consent.</p>
                        </section>

                        <section>
                            <h2>4. Disclaimers</h2>
                            <p>Information on the Blog is provided for informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any information on the Blog. You use the Blog at your own risk.</p>
                        </section>

                        <section>
                            <h2>5. Links to Other Websites</h2>
                            <p>Our Blog may link to third-party websites. We do not endorse or accept responsibility for their content or practices. You use those sites at your own risk.</p>
                        </section>

                        <section>
                            <h2>6. Changes to the Terms</h2>
                            <p>We reserve the right to change these Terms of Service at any time. We will notify you by posting the revised Terms on this page. Continued use of the Blog after a change constitutes your acceptance of the revised Terms.</p>
                        </section>

                        <section>
                            <h2>7. Governing Law</h2>
                            <p>These Terms of Service are governed by and interpreted under the laws of [Your State/Country], without regard to its conflict-of-law principles.</p>
                        </section>

                        <section>
                            <h2>8. Contact Information</h2>
                            <p>
                                If you have any questions or concerns about these policies,
                                contact us <Link href="/contact">here</Link>.
                            </p>
                        </section>

                        <footer className="mt-4">
                            <p>By using our Blog, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.</p>
                        </footer>
                    </article>
                </div>
            </div>
        </div>
    );
}
