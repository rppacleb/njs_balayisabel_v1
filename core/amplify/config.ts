import { Amplify } from "aws-amplify";

const amplifyConfig = {
  auth: {
    user_pool_id: "ap-southeast-1_QCxzFgRzl",
    aws_region: "ap-southeast-1",
    user_pool_client_id: "34c1taer46jk7ami61ffpqob98",
    standard_required_attributes: [
      "email",
      "phone_number",
      "given_name",
      "family_name",
    ],
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_numbers: true,
      require_symbols: true,
      require_uppercase: true,
    },
  },
  version: "1.1",
};

// Initialize Amplify
Amplify.configure(amplifyConfig);
