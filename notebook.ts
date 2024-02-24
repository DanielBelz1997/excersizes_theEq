function checkSyntax(sqlStatement) {
  const regex = /\bselecy\b/gi;
  const match = sqlStatement.match(regex);
  if (match) {
    return {
      success: false,
      message: `Possible typo: "selecy" should be "SELECT"`,
      index: match.index,
    };
  } else {
    return {
      success: true,
      message: "Syntax check passed",
    };
  }
}

// Example usage
const query = "selecy * from table";
const result = checkSyntax(query);
if (!result.success) {
  console.error(`Syntax Error: ${result.message} at index ${result.index}`);
}
