export class Recipe {
  _name!: string;
  _category?: string;
  _descripcion?: string; 

  constructor(aName: string) {
    this.name = aName;
  
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim(); 
    
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }
  

 
get descripcion(): string{
  return this._descripcion || "Sin Descripcion";
}

set descripcion(adesc: string) {
  this._descripcion = adesc; 
}

 get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - Descripción: ${this.descripcion}`;
  }
}
