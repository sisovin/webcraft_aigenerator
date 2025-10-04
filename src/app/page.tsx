'use client';

import { useUser, SignInButton, SignOutButton } from '@clerk/clerk-react';
import { useState } from 'react';

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
    <div className="container mx-auto py-8">
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
  );
}
