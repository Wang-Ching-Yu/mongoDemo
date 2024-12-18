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

## 架構圖

### 架構圖：前端、後端、資料庫及其互動

```plaintext
                   +-----------------------+                   
                   |       前端服務        |                   
                   |     (React.js)        |                   
                   +-----------------------+                   
                               |                                 
                               | HTTP 請求                      
                               ↓                                 
+-----------------------+      +-----------------------+         
|       後端路由        |      |       控制器層         |         
|      (Router)         | ---> |    (Controller)       |         
+-----------------------+      +-----------------------+         
                               |                                 
                               | 調用服務層                      
                               ↓                                 
                   +-----------------------+                    
                   |       服務層          |                    
                   |      (Service)        |                    
                   +-----------------------+                    
                               |                                 
                               | 調用數據模型                    
                               ↓                                 
                   +-----------------------+                    
                   |       數據模型        |                    
                   |       (Model)         |                    
                   +-----------------------+                    
                               |                                 
                               | 與 MongoDB 交互                 
                               ↓                                 
                   +-----------------------+                    
                   |       資料庫          |                    
                   |      (MongoDB)        |                    
                   +-----------------------+                    
```

---

## 流程圖：CRUD 功能操作流程

```plaintext
用戶操作前端界面 (React.js)
        │
        ↓
發送 HTTP 請求 (Fetch API)
        │
        ↓
後端路由匹配 (Router)
        │
        ↓
控制器調用服務層 (Controller → Service)
        │
        ↓
服務層調用數據模型 (Service → Model)
        │
        ↓
數據模型與 MongoDB 交互
        │
        ↓
MongoDB 返回結果至服務層 (Model → Service)
        │
        ↓
服務層返回結果至控制器 (Service → Controller)
        │
        ↓
控制器返回結果至前端 (Controller → Frontend)
        │
        ↓
前端接收數據並更新界面
```

---

## 流程解說
1. **用戶操作前端界面**：
   - 使用者透過 React 前端進行操作，例如按鈕提交表單。

2. **前端發送 HTTP 請求**：
   - 前端使用 Fetch API 發送 POST、GET、PUT 或 DELETE 請求。

3. **後端處理請求**：
   - Router 根據 URL 路由分配請求至對應的 Controller 方法。

4. **控制器調用服務層**：
   - Controller 接收請求，將邏輯處理交由 Service 負責。

5. **服務層調用數據模型**：
   - Service 根據邏輯調用 Model，完成與 MongoDB 的數據交互。

6. **MongoDB 返回結果**：
   - Model 透過 Mongoose 與 MongoDB 交互，返回操作結果。

7. **返回前端**：
   - 後端將結果逐層返回，最終由前端接收並更新畫面。

8. **前端更新界面**：
   - 前端接收後端的回應數據，動態更新界面顯示或彈出提示。

