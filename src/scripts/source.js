const ajax = {
  header: {
    companyName: "Company name",
    menu: ["Features", "Enterprise", "Support", "Pricing"]
  },
  main: {
    header: "Pricing",
    description:
      "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built wuth default Bootstrap components and utilities wuth lil customization.",
    tariffs: [
      {
        name: "Free",
        price: 0,
        period: "\\ mo",
        description: [
          "10 users included",
          "2 GB of storage",
          "Email support",
          "Help center access"
        ]
      },
      {
        name: "Pro",
        price: 15,
        period: "\\ mo",
        description: [
          "20 users included",
          "10 GB of storage",
          "Priority email support",
          "Help center access"
        ]
      },
      {
        name: "Enterprise",
        price: 29,
        period: "\\ mo",
        description: [
          "30 users included",
          "15 GB of storage",
          "Phone and email support",
          "Help center access"
        ]
      }
    ]
  }
};

export default ajax;
