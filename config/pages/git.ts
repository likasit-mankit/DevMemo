export const gitData = {
  title: "สูตรโกงเขียนโค้ด > Git",
  description: "รวมคำสั่ง Git สำหรับการจัดการ Version Control",
  hideSidebar: true,
  content: {
    th: {
      sections: [
        {
          title: "คำศัพท์",
          icon: "📰",
          type: "vocabulary",
          items: [
            { cmd: "Initialize (Init)", desc: "เริ่มต้น Repository ใหม่" },
            { cmd: "Repository (Repo)", desc: "ที่เก็บข้อมูลโปรเจกต์ Git" },
            { cmd: "Local Repository", desc: "Repository ที่อยู่บนเครื่องของเรา" },
            { cmd: "Remote Repository", desc: "Repository ที่อยู่บนเซิร์ฟเวอร์" },
            { cmd: "Working Directory", desc: "โฟลเดอร์ที่ทำงานปัจจุบัน" },
            { cmd: "Change", desc: "การเปลี่ยนแปลงของไฟล์" },
            { cmd: "Stage Change", desc: "เตรียมไฟล์เข้าสู่การ Commit" },
            { cmd: "Unstage Change", desc: "ยกเลิกการ Stage" },
            { cmd: "Discard Change", desc: "ยกเลิกการเปลี่ยนแปลงไฟล์" },
            { cmd: "Commit", desc: "บันทึกการเปลี่ยนแปลงของ Stage" },
            { cmd: "Commit Message", desc: "ข้อความอธิบายการ Commit" },
            { cmd: "Commit Amend", desc: "แก้ไข Commit ล่าสุด" },
            { cmd: "Head", desc: "ตำแหน่งของ Commit ล่าสุด" },
            { cmd: "Branch", desc: "สาขาในโปรเจกต์สำหรับการพัฒนา" },
            { cmd: "Checkout", desc: "สลับไปยังจุดต่างๆ ของ Commit" },
            { cmd: "Merge", desc: "รวมโค้ดจากสอง Branch เข้าด้วยกัน" },
            { cmd: "Conflict", desc: "ความขัดแย้งในการ Merge" },
            { cmd: "Resolve", desc: "แก้ไขความขัดแย้งในการ Merge" },
            { cmd: "Clone", desc: "คัดลอก Remote Repo ไปยัง Local" },
            { cmd: "Fetch", desc: "ดึงข้อมูลล่าสุดจาก Remote" },
            { cmd: "Pull", desc: "ดึงข้อมูลจาก Remote และอัปเดตไฟล์" },
            { cmd: "Push", desc: "ส่ง Commit จาก Local ไป Remote" },
          ]
        },
        {
          title: "Config",
          icon: "⚙️",
          items: [
            { cmd: "git config --list", desc: "รายการตั้งค่าที่มี (กด q เพื่อออก)" },
            { cmd: "git config --unset <setting>", desc: "ยกเลิกการตั้งค่าที่เลือก" },
            { cmd: "git config --global user.name <name>", desc: "ตั้งชื่อผู้ Commit แบบ Global" },
            { cmd: "git config --global user.email <email>", desc: "ตั้งค่า email แบบ Global" },
            { cmd: "git config --global alias.<shortcut> <command>", desc: "ตั้งคำสั่งลัดให้กับ command" },
            { cmd: "git config --global color.ui true", desc: "เปิดใช้งานสีบน CLI" },
          ]
        },
        {
          title: "Basic / Initial",
          icon: "🚀",
          items: [
            { cmd: "git [command] --help", desc: "เรียกดู Help ของคำสั่งนั้นๆ" },
            { cmd: "git init", desc: "เริ่มต้นสร้าง Repository ใหม่" },
            { cmd: "git clone <url>", desc: "Clone Repository ตาม URL" },
            { cmd: "git config user.name <name>", desc: "ตั้งชื่อเฉพาะ Repo นี้" },
          ]
        },
        {
          title: "Changes",
          icon: "🔄",
          items: [
            { cmd: "git add <file>", desc: "เลือกไฟล์เข้า Stage เฉพาะไฟล์" },
            { cmd: "git add .", desc: "นำไฟล์เปลี่ยนทั้งหมดเข้า Stage" },
            { cmd: "git commit -m \"message\"", desc: "Commit พร้อมใส่ข้อความ" },
            { cmd: "git commit --amend", desc: "แก้ไขข้อความ Commit ล่าสุด" },
            { cmd: "git reset <file>", desc: "Unstage ไฟล์ที่เลือก" },
            { cmd: "git reset --soft <commit>", desc: "Soft Reset ไปยัง Commit นั้น" },
            { cmd: "git reset --hard <commit>", desc: "Hard Reset ไปยัง Commit นั้น" },
            { cmd: "git stash", desc: "Stash การเปลี่ยนแปลงทั้งหมด" },
            { cmd: "git stash apply", desc: "นำ Stash ล่าสุดไปใช้" },
            { cmd: "git stash pop", desc: "นำ Stash ล่าสุดไปใช้และลบทิ้ง" },
            { cmd: "git stash drop", desc: "ลบ Stash ล่าสุด" },
          ]
        },
        {
          title: "Remote",
          icon: "🌐",
          items: [
            { cmd: "git remote", desc: "ตรวจสอบรายการ Remote" },
            { cmd: "git remote -v", desc: "ตรวจสอบ Remote แบบละเอียด" },
            { cmd: "git push", desc: "Push ไปยัง Remote" },
            { cmd: "git push -f", desc: "Push แบบบังคับ (Force)" },
            { cmd: "git fetch", desc: "ดึงข้อมูลจาก Remote แต่ไม่อัปเดตไฟล์" },
            { cmd: "git pull", desc: "ดึงและอัปเดตไฟล์ทันที" },
          ]
        },
        {
          title: "Branch",
          icon: "🌿",
          items: [
            { cmd: "git branch", desc: "ตรวจสอบรายการ Branch" },
            { cmd: "git branch <name>", desc: "สร้าง Branch ใหม่" },
            { cmd: "git branch -d <name>", desc: "ลบ Branch ตามชื่อ" },
            { cmd: "git merge <branch>", desc: "Merge โค้ดเข้าปัจจุบัน" },
            { cmd: "git merge --continue", desc: "ดำเนินการ Merge หลังแก้ Conflict" },
            { cmd: "git merge --abort", desc: "ยกเลิกการ Merge กรณ๊ Conflict" },
            { cmd: "git rebase <branch>", desc: "Rebase ไปยัง Branch ที่กำหนด" },
          ]
        },
        {
          title: "Inspect",
          icon: "🔍",
          items: [
            { cmd: "git checkout <branch>", desc: "สลับ Branch" },
            { cmd: "git checkout -b <name>", desc: "สร้างและสลับ Branch ทันที" },
            { cmd: "git status", desc: "แสดงสถานะปัจจุบันของ Repo" },
            { cmd: "git log", desc: "แสดงประวัติการ Commit" },
            { cmd: "git show <commit>", desc: "แสดงข้อมูลของ Commit" },
          ]
        }
      ]
    },
    en: {
      sections: [
        {
          title: "Vocabulary",
          icon: "📰",
          type: "vocabulary",
          items: [
            { cmd: "Initialize (Init)", desc: "Start a new Git repository" },
            { cmd: "Repository (Repo)", desc: "Database of the project" },
            { cmd: "Local Repository", desc: "Repository on your local machine" },
            { cmd: "Remote Repository", desc: "Repository on a remote server" },
            { cmd: "Working Directory", desc: "Your current working files" },
            { cmd: "Change", desc: "Modification of a file" },
            { cmd: "Stage Change", desc: "Add file to staging area" },
            { cmd: "Unstage Change", desc: "Remove file from staging area" },
            { cmd: "Commit", desc: "Save code as a snapshot" },
            { cmd: "Commit Message", desc: "Description of the commit" },
            { cmd: "Branch", desc: "An independent line of development" },
            { cmd: "Checkout", desc: "Switch target branch/commit" },
            { cmd: "Merge", desc: "Combine two branches together" },
            { cmd: "Conflict", desc: "Conflicting merge edits" },
            { cmd: "Clone", desc: "Copy remote repo to local" },
            { cmd: "Fetch", desc: "Get latest changes from remote" },
            { cmd: "Pull", desc: "Fetch and merge from remote" },
            { cmd: "Push", desc: "Send local commits to remote" },
          ]
        },
        {
          title: "Config",
          icon: "⚙️",
          items: [
            { cmd: "git config --list", desc: "List all settings (press q to quit)" },
            { cmd: "git config --unset <setting>", desc: "Unset a selected setting" },
            { cmd: "git config --global user.name <name>", desc: "Set global commit name" },
            { cmd: "git config --global user.email <email>", desc: "Set global commit email" },
            { cmd: "git config --global alias.<shortcut> <cmd>", desc: "Set a command shortcut" },
            { cmd: "git config --global color.ui true", desc: "Enable CLI colors" },
          ]
        },
        {
          title: "Basic / Initial",
          icon: "🚀",
          items: [
            { cmd: "git [command] --help", desc: "Show help for a command" },
            { cmd: "git init", desc: "Initialize a new repository" },
            { cmd: "git clone <url>", desc: "Clone a repository by URL" },
            { cmd: "git config user.name <name>", desc: "Set repo specific name" },
          ]
        },
        {
          title: "Changes",
          icon: "🔄",
          items: [
            { cmd: "git add <file>", desc: "Stage a specific file" },
            { cmd: "git add .", desc: "Stage all changed files" },
            { cmd: "git commit -m \"message\"", desc: "Commit with a message" },
            { cmd: "git commit --amend", desc: "Modify the last commit" },
            { cmd: "git reset <file>", desc: "Unstage a file" },
            { cmd: "git reset --soft <commit>", desc: "Soft reset to a commit" },
            { cmd: "git reset --hard <commit>", desc: "Hard reset to a commit" },
            { cmd: "git stash", desc: "Stash all changes" },
            { cmd: "git stash apply", desc: "Apply the latest stash" },
            { cmd: "git stash pop", desc: "Apply and drop latest stash" },
            { cmd: "git stash drop", desc: "Delete the latest stash" },
          ]
        },
        {
          title: "Remote",
          icon: "🌐",
          items: [
            { cmd: "git remote", desc: "List remote repositories" },
            { cmd: "git remote -v", desc: "List remotes verbosely" },
            { cmd: "git push", desc: "Push to remote repository" },
            { cmd: "git push -f", desc: "Force push to remote" },
            { cmd: "git fetch", desc: "Fetch without updating local" },
            { cmd: "git pull", desc: "Fetch and merge immediately" },
          ]
        },
        {
          title: "Branch",
          icon: "🌿",
          items: [
            { cmd: "git branch", desc: "List all branches" },
            { cmd: "git branch <name>", desc: "Create a new branch" },
            { cmd: "git branch -d <name>", desc: "Delete a branch" },
            { cmd: "git merge <branch>", desc: "Merge branch into current" },
            { cmd: "git merge --continue", desc: "Continue after resolving conflict" },
            { cmd: "git merge --abort", desc: "Abort a conflicting merge" },
            { cmd: "git rebase <branch>", desc: "Rebase to a specific branch" },
          ]
        },
        {
          title: "Inspect",
          icon: "🔍",
          items: [
            { cmd: "git checkout <branch>", desc: "Switch to a branch" },
            { cmd: "git checkout -b <name>", desc: "Create and switch branch" },
            { cmd: "git status", desc: "Show current repository status" },
            { cmd: "git log", desc: "Show commit history" },
            { cmd: "git show <commit>", desc: "Show details of a commit" },
          ]
        }
      ]
    }
  }
};
