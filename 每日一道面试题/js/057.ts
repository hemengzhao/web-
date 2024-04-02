function create(x: number): string;
function create(x: string, y: string): string;
function create(x: object): string;
function create(x: string | number | object, y?: string): string {
  return "";
}
create(1);
create("1", "2");
create({});
