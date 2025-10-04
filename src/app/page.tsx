'use client';

import { useUser, SignInButton, SignOutButton } from '@clerk/clerk-react';
import { useState } from 'react';

// Navigation Bar Component
function NavigationBar() {
  return (
    <nav className="w-full bg-white shadow mb-4">
      <div className="container mx-auto flex justify-center items-center py-4">
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Features</a></li>
          <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 mt-16">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-start">
        {/* About Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">About AI Website Generator</h3>
          <p className="text-sm">
            AI Website Generator SaaS lets you create and preview websites instantly using AI. Save your projects, upload images, and more!
          </p>
        </div>
        {/* Useful Links */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul>
            <li><a href="#" className="hover:text-white text-sm">Home</a></li>
            <li><a href="#" className="hover:text-white text-sm">Features</a></li>
            <li><a href="#" className="hover:text-white text-sm">Pricing</a></li>
            <li><a href="#" className="hover:text-white text-sm">About</a></li>
            <li><a href="#" className="hover:text-white text-sm">Contact</a></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm mb-2">Email: support@aiwebsitegen.com</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0016.616 3c-2.726 0-4.937 2.21-4.937 4.936 0 .386.043.761.127 1.124C7.691 8.846 4.066 6.868 1.64 3.942c-.423.726-.666 1.567-.666 2.465 0 1.701.867 3.201 2.188 4.081A4.904 4.904 0 01.964 9.14v.062a4.936 4.936 0 003.95 4.827c-.419.113-.861.174-1.318.174-.321 0-.636-.031-.943-.089.635 1.978 2.476 3.417 4.658 3.456A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.514 14.009-14.036 0-.213-.005-.425-.014-.636A10.01 10.01 0 0024 4.557z" /></svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400">
              <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.389-1.334-1.759-1.334-1.759-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.304.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.309.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.183 0 0 1.008-.323 3.302 1.23a11.51 11.51 0 013.005-.404c1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.656.243 2.88.12 3.183.77.84 1.233 1.912 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.516-1.535-2.516-1.537 0-1.773 1.2-1.773 2.437v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.38-1.563 2.841-1.563 3.038 0 3.6 2.001 3.6 4.601v4.729z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} AI Website Generator SaaS. All rights reserved.
      </div>
    </footer>
  );
}

export default function Page() {
  const { user, isSignedIn } = useUser();

  // State for prompt, preview, and projects
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState<{ html: string; css: string; js: string; images: string[] } | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch saved projects on mount
  // You should use SWR/React Query for real apps and call your DB API
  // useEffect(() => { if(isSignedIn) fetchProjects() }, [isSignedIn]);

  // Dummy handler for AI website generation
  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Send prompt to your backend API (Next.js route handler, e.g., /api/generate-site)
      const res = await fetch('/api/generate-site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setPreview(data);
    } catch (err) {
      alert('Failed to generate website!');
    }
    setLoading(false);
  };

  // Dummy handler for saving project
  const handleSave = async () => {
    if (!preview) return;
    // Call your DB API to save the project (e.g., Drizzle ORM + Neon endpoint)
    await fetch('/api/save-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...preview, prompt }),
    });
    // Re-fetch projects
    // fetchProjects();
    alert('Project saved!');
  };

  // Dummy handler for image uploads (ImageKit integration)
  const handleImageUpload = async (file: File) => {
    // Call your ImageKit upload endpoint or use ImageKit SDK
    // const imageUrl = await uploadToImageKit(file);
    // setPreview(prev => ({ ...prev, images: [...(prev?.images || []), imageUrl] }));
    alert('Image uploaded! (implement ImageKit integration)');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />
      <div className="container mx-auto py-8 flex-1">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">AI Website Generator SaaS</h1>
          <div>
            {isSignedIn ? (
              <span>
                Welcome, {user?.fullName}! <SignOutButton />
              </span>
            ) : (
              <SignInButton />
            )}
          </div>
        </header>

        {isSignedIn ? (
          <main>
            {/* AI Website Generation Form */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Generate a Website</h2>
              <input
                type="text"
                className="border px-4 py-2 w-full mb-2"
                placeholder="Describe your website..."
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleGenerate}
                disabled={loading || !prompt}
              >
                {loading ? 'Generating...' : 'Generate'}
              </button>
            </section>

            {/* Preview Section */}
            {preview && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Website Preview</h2>
                <div className="border p-4 mb-2">
                  {/* Inject HTML/CSS/JS safely; for real app use sandboxed iframe */}
                  <iframe
                    srcDoc={`<html><head><style>${preview.css}</style></head><body>${preview.html}<script>${preview.js}</script></body></html>`}
                    style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
                    sandbox="allow-scripts allow-same-origin"
                    title="Website Preview"
                  />
                </div>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  onClick={handleSave}
                >
                  Save Project
                </button>
                {/* Image Upload Example */}
                <input
                  type="file"
                  accept="image/*"
                  className="mt-4"
                  onChange={e => e.target.files && handleImageUpload(e.target.files[0])}
                />
              </section>
            )}

            {/* Saved Projects Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">My Projects</h2>
              <ul>
                {projects.map((proj, idx) => (
                  <li key={idx} className="border p-2 mb-2">
                    <div>{proj.prompt}</div>
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => setPreview(proj)}
                    >
                      Preview
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg">Please sign in to access the AI Website Generator.</p>
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
