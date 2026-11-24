export default function Credit() {
    return (
        <div className="bg-background text-foreground">
            <div className="d-flex justify-content-center">
                <article>
                    <header className="text-center mb-4">
                        <h1>Image Credits</h1>
                    </header>
                    <div className="text-justify">
                        <p>
                        We are grateful to the photographers and creators who share their work. Their images enrich this site and help connect with its readers.
                        </p>
                        <p>
                            <strong>Images from <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>:</strong> Free for commercial use; attribution is not required but is appreciated.
                        </p>
                        <p>
                            <strong>Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>:</strong> Free for commercial use; attribution is not required but is appreciated.
                        </p>
                        <p>
                            If your photograph appears here and you would like a credit added, please contact us.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
