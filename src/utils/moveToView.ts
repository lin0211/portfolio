export default async function moveToView(sectionId: string) {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}
