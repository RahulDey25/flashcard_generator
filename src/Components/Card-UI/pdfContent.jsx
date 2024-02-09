// importing components from React & react-renderer for creating PDF files on the browser and server
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";


// PdfContent component takes a 'flashcards' prop and renders a PDF document containing flashcard information
const PdfContent = ({ flashcards }) => {

    // Rendering the content of Pdf 
    return (
        // Root Document
        <Document>

            {/* Page component for A4 size with padding */}
            <Page size="A4" style={{ padding: 30 }}>

                {/* Main content container with vertical layout and bottom margin*/}
                <View style={{ flexDirection: 'column', marginBottom: 20 }}>

                    {/* Flashcard header section with column layout and centered alignment*/}
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        {/* Flashcard title */}
                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>
                            FLASHCARD
                        </Text>

                        {/* Group name with styling */}
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'dodgerblue' }}>
                            {flashcards.groupname}
                        </Text>

                        {/* Group description with styling */}
                        <Text style={{ fontSize: 18, marginBottom: 20, color: 'black' }}>
                            {flashcards.groupdescription}
                        </Text>
                    </View>

                    {/* Flashcard container section with left alignment */}
                    <View style={{ flexDirection: 'column', alignItems: 'left' }}>

                        {/* Mapping through each flashcard */}
                        {flashcards.cards.map((card, index) => (
                            <View key={index} style={{ marginBottom: 20 }}>

                                {/* Card name with styling */}
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'red' }}>
                                    {card.cardname}
                                </Text>

                                {/* Card content with row layout */}
                                <View style={{ flexDirection: 'row' }}>

                                    {/* Card's Image component with styling */}
                                    <Image
                                        src={card?.cardImage}
                                        style={{ width: '180px', height: 'auto', marginRight: 10 }}
                                    />

                                    {/* Text component for card description with flex width */}
                                    <Text style={{ flex: 1, fontSize: 14 }}>
                                        {card.carddescription}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

// Exporting the PdfContent component as the default export
export default PdfContent;