// importing components from React & react-renderer for creating PDF files on the browser and server
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

// printContent component takes a 'flashcards' prop and renders a document containing flashcard information
const printContent = ({ flashcards }) => {

    // Main Document component for rendering
    return (
        // root document
        <Document>

            {/* Page component for A4 size with padding */}
            <Page size="A4" style={{ padding: 30 }}>

                {/* Main content container with column layout and bottom margin */}
                <View style={{ flexDirection: "column", marginBottom: 20 }}>

                    {/* Inner container with column layout and centered alignment */}
                    <View style={{ flexDirection: "column", alignItems: "center" }}>

                        {/* Flashcard title with styling */}
                        <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "black" }}>
                            FLASHCARD
                        </Text>

                        {/* Group name with styling */}
                        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "dodgerblue" }}>
                            {flashcards.groupname}
                        </Text>

                        {/* Group description with styling */}
                        <Text style={{ fontSize: 18, marginBottom: 20, color: "black" }}>
                            {flashcards.groupdescription}
                        </Text>
                    </View>

                    {/* Flashcard details section with left alignment */}
                    <View style={{ flexDirection: "column", alignItems: "left" }}>

                        {/* Mapping through each flashcard */}
                        {flashcards.cards.map((card, index) => (
                            <View key={index} style={{ marginBottom: 20 }}>

                                {/* Card name with styling */}
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "red" }}>
                                    {card.cardname}
                                </Text>

                                {/* Container for card details with row layout */}
                                <View style={{ flexDirection: 'row' }}>

                                    {/* Card image with styling */}
                                    <Image src={card?.cardImage} style={{ width: "180px", height: "auto", marginRight: 10 }} />

                                    {/* component for card description with flexible width */}
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

// Exporting the printContent component as the default export
export default printContent;