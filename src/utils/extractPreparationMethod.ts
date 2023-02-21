export function extractPreparationMethod(recipe: any): string[] {
    const instructions = recipe.analyzedInstructions[0]?.steps;
    if (!instructions) return [];
  
    return instructions.map((instruction: any) => instruction.step);
  }