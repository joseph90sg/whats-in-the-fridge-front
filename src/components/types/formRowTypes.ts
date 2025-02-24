export interface FormRowProps {
    id: string;
    label: string;
    isRequired?: boolean;
    children: React.ReactNode; // Permite pasar cualquier contenido
}