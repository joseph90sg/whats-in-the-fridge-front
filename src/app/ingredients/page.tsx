import Table from "@/components/molecules/Table";

export default function IngredientsPage() {
  const data = [
    { Name: "Manzana", Category: "Fruta", Price: "$1", Fav: "false" },
    { Name: "Banana", Category: "Fruta", Price: "$0.1", Fav: "true" },
    { Name: "Zanahoria", Category: "Verdura", Price: "$0.5" , Fav: "false" },
  ];

  return (
    <div>
      <h1>Ingredientes</h1>
      <p className="mb-4">Aquí puedes gestionar tus ingredientes disponibles.</p>

      <Table data={data} />
    </div>
  );
}
