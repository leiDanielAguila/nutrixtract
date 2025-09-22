export const scrollToContact = () => {
  const contactSection = document.querySelector(".contact-us");
  if (contactSection) {
    // Check if we're on mobile by checking window width directly
    const isMobile = window.innerWidth < 768;
    const headerOffset = isMobile ? 60 : 50; // Match your header height
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://nglxfwxexbpbeybkbrvs.supabase.co/storage/v1/object/public/webfiles/info.png"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "info.png";
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to opening in new tab
      window.open(
        "https://nglxfwxexbpbeybkbrvs.supabase.co/storage/v1/object/public/webfiles/info.png",
        "_blank"
      );
    }
  };