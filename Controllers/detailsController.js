const UserDetails = require('../Models/Details'); // Make sure this path is correct

const createUserDetails = async (req, res) => {
    try {
        // 1. Destructure the data from the request body
        const {
            name,
            gender,
            location,
            weight, // Use the correct key
            height,
            targetWeight,
            age,
            activityLevel,
            medicalDisabilities // Use the correct key
        } = req.body;

        // 2. Prepare the data object to be saved
        // We are not including userAccount since there is no logged-in user
        const userDetailsData = {
            name,
            gender,
            location,
            weight, // Pass it directly
            height,
            targetWeight,
            age,
            activityLevel,
            medicalDisabilities // Pass it directly
        };

        // 3. Create a new document in the database with the provided data
        // We use .create() here instead of findOneAndUpdate since we aren't linking to a user yet
        const newDetails = await UserDetails.create(userDetailsData);

        // 4. Send a success response
        res.status(201).json({
            message: 'User details saved successfully!',
            details: newDetails
        });

    } catch (error) {
        // This will now give you more specific validation errors if they occur
        console.error('Error saving user details:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', errors: error.errors });
        }

        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = {
    createUserDetails,
};