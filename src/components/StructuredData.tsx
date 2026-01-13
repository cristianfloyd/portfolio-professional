export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Cristian Arenas",
      "jobTitle": "Backend Developer & Infrastructure Specialist",
      "description": "Especialista IT con 15+ años de experiencia",
      "url": "https://dev.cristianarenas.com",
      "sameAs": [
        "https://linkedin.com/in/cristian-arenas",
        "https://github.com/cristianfloyd"
      ],
      "email": "cristianfloyd@gmail.com",
      "knowsAbout": [
        "Python",
        "Laravel",
        "PostgreSQL",
        "Linux System Administration",
        "Docker",
        "DevOps"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }