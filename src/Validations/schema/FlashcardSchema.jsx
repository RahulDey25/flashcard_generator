// Importing Yup library for form validation
import * as Yup from "yup";

// Defining a Yup validation schema for FlashCards
const FlashCardSchema = Yup.object().shape({


    // Validating groupid as a string
    groupid: Yup.string(),

    // Validating groupname with specific constraints
    groupname: Yup.string()
        .min(4, "Group name must be atleast 4 charecters")
        .max(40, "Group name must be less than 40 charecters")
        .required("Group name cannot be empty!"),


    // Validating groupdescription with specific constraints
    groupdescription: Yup.string()
        .min(40, "Group description must be atleast 40 charecters")
        .max(500, "Group description must be less than 500 characters")
        .required("Group description cannot be empty!"),

    // Validating groupimg as a mixed type (can be any)
    groupimg: Yup.mixed(),

    // Validating an array of cards using Yup's array and object shape
    cards: Yup.array().of(
        Yup.object().shape({
            // Validating cardid as a string
            cardid: Yup.string(),

            // Validating cardname with specific constraints
            cardname: Yup.string()
                .min(4, " Card name must be atleast 4 charecters")
                .max(40, " Card name must be less than 40 charecters")
                .required("Card name cannot be empty!"),

            // Validating carddescription with specific constraints
            carddescription: Yup.string()
                .min(100, "Card description must be more than 100 charecters")
                .max(400, "Card description must be less than 400 characters")
                .required("Card description cannot be empty"),

            // Validating cardImg as a string
            cardImg: Yup.string(),
        })
    ),

    // Validating createdOn as a date and providing a default value
    createdOn: Yup.date().default(() => new Date()),
});

// Exporting the FlashCardSchema for use in form validation
export default FlashCardSchema