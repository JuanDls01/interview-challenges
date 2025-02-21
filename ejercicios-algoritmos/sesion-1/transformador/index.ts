type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const output = input.edades.map((edad, index) => {
    return {
      id: index + 1,
      nombre: input.nombres[index],
      edad: edad,
    };
  });

  return output;
}
