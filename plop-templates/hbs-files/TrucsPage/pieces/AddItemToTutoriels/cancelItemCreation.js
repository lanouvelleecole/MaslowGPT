import { GoToTutorielsList } from "../NavHelpers/GoToTutorielsList";

/**
 * si appui sur bouton back du device,
 * ou back appbar, ou x bottom bar,
 * on retourne vers la liste de données.
 */
export function cancelItemCreation() {
  GoToTutorielsList();
}
