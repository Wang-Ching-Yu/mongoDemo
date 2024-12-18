# README 文件

## 專案簡介
此專案為一個完整的 MERN (MongoDB, Express.js, React.js, Node.js) 堆疊應用程式，提供使用者友好的界面和高效的後端 API。專案功能包括 CRUD 操作和實時數據顯示，適合各種 Web 應用場景。

## 功能簡述
1. **資料管理功能**：新增、查詢、更新、刪除 (CRUD)。
2. **視覺化介面**：React.js 打造的前端 UI。
3. **後端 API**：Node.js 和 Express.js 實現業務邏輯。
4. **資料存儲**：MongoDB 作為資料庫系統。

---

## 安裝與執行指引

### 環境需求
- Node.js 版本：>= 16.x
- MongoDB 版本：>= 5.x

### 安裝步驟

1. **下載專案檔案**
   ```bash
   git clone <此專案的 GitHub URL>
   cd <專案資料夾名稱>

2. **安裝依賴項目**
   ```bash
   npm install
   
3. **設置環境變數** 在根目錄創建 .env 文件，並加入以下內容：
   ```bash
   DBUSER = Wangtest
   DBPASSWORD = testWang
   DBHOST = 127.0.0.1
   DBPORT = 27017
   DBNAME = 410550163
   PORT = 27018
   LogPath = logs
   assetsPath = /assets
   HomePagePath = /Users/wangjingyu/Projects/Student/react-ts-mid/index.html
   privateKey = key
4. **啟動伺服器**
   ```bash
   npm run dev

---

## API 規格說明

### API 路由

#### 1. **取得所有學生資料**
- **方法**：GET
- **路徑**：`/api/v1/user/findAll`
- **回應範例**：
  ```json
  {
    "code": 200,
    "message": "",
    "body": {
            "_id": "67629f7104756b2fb3f8c7ed",
            "userName": "tkuib0163",
            "sid": "51",
            "name": "王敬瑜",
            "department": "國際企業系",
            "grade": "四年級",
            "class": "B",
            "Email": "410550163@gms.tku.edu.tw",
            "absences": 1
    }
  }

#### 2. **新增學生資料**
- **方法**：POST
- **路徑**：`/api/v1/user/insertOne`
- **請求範例**：
  ```json
  {
    "userName": "tkuib0163",
    "name": "王敬瑜",
    "department": "國際企業系",
    "grade": "四年級",
    "class":"A",
    "Email": "410550163@gms.tku.edu.tw"
  }
- **回應範例**：
  ```json
  {
  "code": 200,
    "message": "",
    "body": {
        "userName": "tkuib0163",
        "sid": "51",
        "name": "王敬瑜",
        "department": "國際企業系",
        "grade": "四年級",
        "class": "A",
        "Email": "410550163@gms.tku.edu.tw",
        "absences": 1,
        "_id": "67629f7104756b2fb3f8c7ed"
    }
  }


#### 3. **更新學生資料**
- **方法**：PATCH
- **路徑**：`/api/v1/user/updateOne/:userName`
- **請求範例**：
  ```json
  {
     "class": "B"
  }
- **回應範例**：
  ```json
  {
   "code": 200,
    "message": "Update success",
    "body": {
        "_id": "67629f7104756b2fb3f8c7ed",
        "userName": "tkuib0163",
        "sid": "51",
        "name": "王敬瑜",
        "department": "國際企業系",
        "grade": "四年級",
        "class": "B",
        "Email": "410550163@gms.tku.edu.tw",
        "absences": 1
    }
  }

#### 4. **刪除學生資料**
- **方法**：DELETE
- **路徑**：`/api/v1/user/deleteOne/:userName`
- **回應範例**：
  ```json
  {
    "code": 200,
    "message": "Delete success",
    "body": ""
  }
