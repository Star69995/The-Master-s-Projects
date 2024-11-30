# הפרויקטים של פסגת המאסטרים הנועזים

## מה הפרויקט הזה עושה?
פרויקט זה מציג אתר המיועד לשיתוף פרויקטים בין מתכנתים, מבוסס על קובץ JSON. האתר נבנה בעזרת HTML, CSS, ו-JavaScript, ומאפשר תצוגה דינמית של פרויקטים מתוך הקובץ.

## איך להשתמש בפרויקט?

### 1. פתיחה ב-Visual Studio Code
1. הורד את קובץ הפרויקט מהמאגר: [The Master's Projects](https://github.com/Star69995/The-Master-s-Projects)
2. פתח את Visual Studio Code
3. בחר באפשרות **File > Open Folder** ובחר את התיקייה של הפרויקט

### 2. הוספת פרויקט חדש
1. פתח את הקובץ `projects.json` בתיקייה
2. הוסף פרויקט חדש לפי המבנה הבא:

```json
{
    "creator": "שם היוצר",
    "site_name": "שם האתר",
    "description": "תיאור קצר של הפרויקט",
    "page_link": "קישור לעמוד הפרויקט",
    "git_link": "קישור למאגר GitHub (אופציונלי)"
}
```

### 3. בדיקת האתר בצורה מקומית
1. התקן את תוסף Live Server ב-Visual Studio Code
2. לחץ לחיצה ימנית על index.html ובחר Open with Live Server
3. האתר ייפתח בדפדפן ויציג את הנתונים מעודכני JSON

### 4. העלאת הפרויקט ל-GitHub

#### באמצעות GitHub Desktop
1. פתח את GitHub Desktop
2. הוסף את הפרויקט:
   - File > Add Local Repository ובחר את התיקייה של הפרויקט
3. בצע Commit לשינויים (הוסף תיאור קצר על השינויים שביצעת)
4. לחץ על Push origin כדי להעלות את השינויים ל-GitHub

#### באמצעות Visual Studio Code
1. פתח את סרגל Source Control (אייקון של ענף) בצד שמאל
2. תראה את השינויים שביצעת
3. לחץ על סימן + ליד כל קובץ כדי להוסיף אותו ל-Commit
4. הוסף תיאור לשינויים ולחץ על ✔️ (Commit)
5. לחץ על שלוש הנקודות > Push כדי להעלות ל-GitHub

### 5. פרסום האתר ב-GitHub Pages
1. עבור לדף הפרויקט ב-GitHub: The Master's Projects
2. עבור ל-Settings > Pages
3. תחת Branch, בחר את main ואת root
4. האתר יפורסם בכתובת ש-GitHub ייצור תוך מספר דקות