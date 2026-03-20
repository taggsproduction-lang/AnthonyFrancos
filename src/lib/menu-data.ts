export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: ("popular" | "gf" | "spicy" | "new")[];
}

export interface MenuCategory {
  name: string;
  slug: string;
  description?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Pizza",
    slug: "pizza",
    description: "New York-style pies made with Wisconsin's finest mozzarella and fresh dough daily",
    items: [
      { name: "Cheese Pizza", price: "From $3.00/slice", tags: ["popular"] },
      { name: "Margherita", description: "Fresh plum tomato sauce, fresh mozzarella, basil and olive oil", price: "$23.35", tags: ["popular"] },
      { name: "Margherita with Burrata", description: "Classic margherita with garlic & burrata", price: "$23.35", tags: ["new"] },
      { name: "Grandma Pie", description: "Thin Sicilian crust, plum tomato sauce, oregano and Romano cheese", price: "$23.25", tags: ["popular"] },
      { name: "Meat Lover", description: "Bacon, pepperoni and sausage", price: "$23.25" },
      { name: "Chicken Bacon Ranch", description: "Breaded chicken and bacon drizzled with ranch (no sauce)", price: "$23.25" },
      { name: "Chicken Vodka Sauce", description: "Breaded chicken in pink sauce", price: "$23.75" },
      { name: "White Pizza", description: "Mozzarella and ricotta cheese", price: "From $20.25" },
      { name: "Five Cheese", description: "Ricotta, Swiss, provolone, American and mozzarella (no sauce)", price: "$25.00" },
      { name: "Pizza Caprese", description: "Plum tomatoes, basil and fresh wet mozzarella", price: "$23.25" },
      { name: "Veggie Pizza", description: "Tomatoes, broccoli and mushrooms", price: "$23.25" },
      { name: "Baked Ziti Pizza", description: "Ziti pasta, ricotta, sauce and mozzarella", price: "$23.25" },
      { name: "Penne Alla Vodka", description: "Penne pasta and vodka sauce", price: "$23.25" },
      { name: "Philly Steak", description: "Steak or chicken, potatoes, peppers and onions", price: "$23.25" },
      { name: "Arugula Salad Pizza", description: "Arugula, fresh mozzarella, bruschetta and balsamic glaze", price: "$23.25" },
      { name: "Sausage & Broccoli Rabe", description: "Sweet Italian sausage with sauteed broccoli rabe", price: "$23.25" },
      { name: "Drunken Margherita", description: "Margherita with vodka sauce", price: "$23.35" },
      { name: "Hawaiian", description: "Ham and pineapple", price: "$23.25" },
      { name: "Gluten Free 12\" Pizza", description: "Available with your choice of toppings", price: "$14.85", tags: ["gf"] },
      { name: "Cauliflower Crust 10\"", description: "Light, crispy cauliflower crust with your toppings", price: "$14.00", tags: ["gf"] },
    ],
  },
  {
    name: "Pasta",
    slug: "pasta",
    description: "Made weekly at one of Brooklyn's oldest pasta houses — choose your pasta and sauce",
    items: [
      { name: "Vodka Sauce", description: "Prosciutto, peas, scallions in pink sauce", price: "$17.00", tags: ["popular"] },
      { name: "Bolognese", description: "Rich meat sauce", price: "$17.00", tags: ["popular"] },
      { name: "Carbonara", description: "Italian bacon and onions in cream sauce", price: "$17.00" },
      { name: "Marinara", description: "Tomato, garlic and fresh basil", price: "$13.50" },
      { name: "Alfredo", description: "Cream sauce", price: "$15.00" },
      { name: "Fresh Clam Sauce", description: "Red or white", price: "$18.00" },
      { name: "Primavera", description: "Mixed garden vegetables in light pink sauce", price: "$17.00" },
      { name: "Meatball or Sausage", description: "In tomato sauce", price: "$17.00" },
      { name: "Puttanesca", description: "Capers, anchovies, garlic and olives in tomato sauce", price: "$16.00" },
      { name: "Garlic and Oil", description: "Simple and classic", price: "$13.00" },
      { name: "Lobster Ravioli", description: "In vodka or tomato sauce", price: "$19.00", tags: ["popular"] },
      { name: "Homemade Lasagna", description: "Layered and baked to perfection", price: "$17.00", tags: ["popular"] },
      { name: "Baked Ziti", description: "Classic oven-baked", price: "$16.45" },
      { name: "Tortellini Alla Panna", description: "Stuffed pasta with mushrooms in cream sauce", price: "$17.00" },
      { name: "Gnocchi Bolognese", description: "Potato-filled pasta in meat sauce", price: "$17.00" },
      { name: "Cavatelli and Broccoli", description: "In garlic and oil", price: "$17.00" },
    ],
  },
  {
    name: "Chicken & Veal",
    slug: "chicken-veal",
    description: "Served with your choice of pasta or salad",
    items: [
      { name: "Chicken Parmigiana", description: "Breaded cutlet, tomato sauce, mozzarella", price: "$19.15", tags: ["popular"] },
      { name: "Chicken Marsala", description: "Sauteed with mushrooms and Marsala wine", price: "$19.15", tags: ["popular"] },
      { name: "Chicken Francese", description: "Egg-dipped, lemon, butter and white wine", price: "$19.15" },
      { name: "Chicken Piccata", description: "Capers and lemon in white wine sauce", price: "$19.15" },
      { name: "Chicken Florentina", description: "White wine, spinach, tomatoes and mozzarella", price: "$19.15" },
      { name: "Chicken Saltimbocca", description: "Prosciutto and spinach in white wine, topped with mozzarella", price: "$19.15" },
      { name: "Chicken Scarpariello", description: "Artichokes, potatoes, sausage in garlic, oil and white wine", price: "$19.15" },
      { name: "Veal Parmigiana", description: "Breaded veal cutlet, tomato sauce, mozzarella", price: "$22.45" },
      { name: "Veal Marsala", description: "Sauteed with mushrooms and Marsala wine", price: "$22.45" },
      { name: "Veal Francese", description: "Egg-dipped, lemon, butter and white wine", price: "$22.45" },
    ],
  },
  {
    name: "Seafood",
    slug: "seafood",
    description: "Fresh catches served with your choice of pasta or salad",
    items: [
      { name: "Shrimp Scampi", description: "Garlic, lemon and white wine", price: "$23.35", tags: ["popular"] },
      { name: "Shrimp Parmigiana", description: "Breaded shrimp, tomato sauce, mozzarella", price: "$23.35" },
      { name: "Shrimp Fra Diavolo", description: "Garlic, wine in spicy tomato sauce", price: "$23.35", tags: ["spicy"] },
      { name: "Seafood Marechiara", description: "Shrimp, clams, mussels and calamari in special marinara", price: "$25.45", tags: ["popular"] },
      { name: "Shrimp Francese", description: "Classic egg-dipped preparation", price: "$23.35" },
      { name: "Shrimp Primavera", description: "Garden vegetables in pink sauce", price: "$23.35" },
    ],
  },
  {
    name: "Appetizers",
    slug: "appetizers",
    description: "Start your meal right",
    items: [
      { name: "Fried Calamari", description: "Served with sweet or hot sauce", price: "$13.00", tags: ["popular"] },
      { name: "Buffalo Wings", description: "Mild, Hot, BBQ or Garlic Parm with blue cheese or ranch", price: "$14.00" },
      { name: "Fresh Mussels", description: "Red or white sauce, hot or sweet", price: "$14.65" },
      { name: "Eggplant Rollatini", description: "Filled with spinach and ricotta, marinara and mozzarella", price: "$12.45" },
      { name: "Baked Clams", description: "A house favorite", price: "$12.45" },
      { name: "Fresh Mozzarella & Roasted Peppers", description: "Classic Italian antipasto", price: "$11.85" },
      { name: "Bruschetta", description: "Toasted and topped fresh", price: "$11.00" },
      { name: "Sampler Platter", description: "Mozz sticks, chicken fingers and jalapeno poppers", price: "$14.25" },
      { name: "Hot Antipasta", description: "Baked mussels, clams, shrimp, stuffed mushrooms and eggplant rollatini", price: "From $17.75" },
    ],
  },
  {
    name: "Salads",
    slug: "salads",
    description: "Fresh and crisp — add grilled chicken or shrimp to any salad",
    items: [
      { name: "House Salad", description: "Iceberg, tomatoes, carrots, cucumber, onions and olives", price: "From $8.40" },
      { name: "Caesar Salad", description: "Crisp Romaine in homemade Caesar dressing", price: "From $8.00" },
      { name: "Cobb Salad", description: "Greens, tomato, egg, avocado, blue cheese, bacon and grilled chicken", price: "From $13.85", tags: ["popular"] },
      { name: "Antipasto Salad", description: "Roasted peppers, ham, salami and provolone", price: "From $10.35" },
      { name: "Greek Salad", description: "Classic Mediterranean style", price: "From $10.35" },
    ],
  },
  {
    name: "Sandwiches & Wraps",
    slug: "sandwiches",
    description: "Hot subs, cold Italian sandwiches, and wraps on your choice of bread",
    items: [
      { name: "Chicken Parm Sub", description: "Breaded chicken, sauce and melted mozzarella", price: "$12.00", tags: ["popular"] },
      { name: "Cheesesteak", description: "Classic Philly style", price: "$11.45" },
      { name: "Veal Parmigiana Sub", description: "Tender veal cutlet with sauce and cheese", price: "$13.00" },
      { name: "Italian Hot Dog", description: "Sauteed with tomato sauce", price: "$12.50" },
      { name: "Prosciutto & Fresh Mozzarella", description: "With sun-dried tomato and olive oil", price: "$13.25" },
      { name: "Grilled Chicken Wrap", description: "Lettuce, tomato and balsamic vinaigrette", price: "$11.00" },
      { name: "Buffalo Chicken Wrap", description: "Spicy buffalo style", price: "$11.00", tags: ["spicy"] },
    ],
  },
  {
    name: "Calzones & Rolls",
    slug: "calzones",
    description: "Stuffed and baked golden",
    items: [
      { name: "Calzone", description: "Ricotta and mozzarella", price: "$10.75", tags: ["popular"] },
      { name: "Stromboli", description: "Ham, salami, pepperoni, sausage and mozzarella", price: "$11.25", tags: ["popular"] },
      { name: "Chicken Roll", description: "Chicken breast with tomatoes, basil and mozzarella", price: "$11.25" },
      { name: "Sausage Roll", description: "Sausage, mozzarella, peppers and onion", price: "$11.00" },
    ],
  },
];
