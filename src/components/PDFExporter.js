import jsPDF from 'jspdf';

export const exportCharacterPDF = (character) => {
  const { name, race, class: characterClass, backstory, imageUrl } = character;

  const pdf = new jsPDF();

  // Add character details
  pdf.setFontSize(18);
  pdf.text(`Character: ${name}`, 10, 20);
  pdf.setFontSize(12);
  pdf.text(`Race: ${race}`, 10, 30);
  pdf.text(`Class: ${characterClass}`, 10, 40);
  pdf.text('Backstory:', 10, 50);
  pdf.setFontSize(10);
  pdf.text(backstory, 10, 60, { maxWidth: 180 });

  // Add character image if available
  if (imageUrl) {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // To avoid CORS issues
    img.src = imageUrl;

    img.onload = () => {
      pdf.addImage(img, 'JPEG', 10, 100, 100, 100); // Adjust dimensions as needed
      pdf.save(`${name || 'character'}.pdf`);
    };

    img.onerror = () => {
      console.error('Failed to load image.');
      pdf.save(`${name || 'character'}.pdf`);
    };
  } else {
    pdf.save(`${name || 'character'}.pdf`);
  }
};
