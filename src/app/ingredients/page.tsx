import Table from "@/components/molecules/Table";

export default function IngredientsPage() {
  const columns = ['Name', 'Category', 'Price'];
  const values = [
    { Name: "Manzana", Category: "Fruta", Price: "$1", details: "Detalles de la manzana" },
    { Name: "Banana", Category: "Fruta", Price: "$0.1", details: "Detalles de la banana" },
    { Name: "Zanahoria", Category: "Verdura", Price: "$0.5" , details: "Detalles de la zanahoria" },
  ];

  return (
    <div>
      <h1>Ingredientes</h1>
      <p className="mb-4">Aquí puedes gestionar tus ingredientes disponibles.</p>

      <Table columns={columns} values={values} />
    </div>
  );
}
