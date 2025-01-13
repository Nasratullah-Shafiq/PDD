
# About The Project

PDD Plant disease Detection

a web app  that helps you detect whether the plant is healthy or infected. If an infection is detected, the app identifies the specific disease and provides a description along with recommended cures with a user-friendly interface.


# Technologies Used

- Backend: Django, Django REST Framework
- Ai Model: MobileNet
- Frontend: React
- Database: Mysql

# Setup

## Backend (Django)

1. Clone the repository to your local machine:

    <code>git clone https://github.com/BodaTech/PLANTS_DISEASE_DETECTION_WEBAPP.git</code>

2. Navigate to the backend directory:

    <code>cd Backend</code>

3. Virtual environment
    - create a virtual environment <code>py -m venv venv</code>
    - activate it <code>venv/Scripts/activate</code> ( <code>source venv/bin/activate</code> in macOS/Linux)

4. Install dependencies:

    <code>pip install -r requirements.txt</code>

5. Apply migrations:
    
    config your database in <code>core/settings.py</code>

    <code>py manage.py migrate</code>

6. Seed the database located in <code>plant\data\\</code>
   
    <code>py manage.py loaddata plant\data\plants.json</code>

    <code>py manage.py loaddata plant\data\diseases.json</code>

    <code>py manage.py loaddata plant\data\cures.json</code>

    <code>py manage.py loaddata plant\data\cures_diseases.json</code>

7. Run the Django development server:

    <code>py manage.py migrate</code>

## Frontend (React)
1. Navigate to the frontend directory:

    <code>cd frontend</code>

2. Install dependencies:

    <code>npm install</code>

3. Start the development server:

    <code>npm run dev</code>



## Warning

The model can make false prediction in some cases and can detect only these disease categories:

- Apple
  - Apple scab
  - Black rot
  - Cedar apple rust
  - Healthy
- Corn (maize)
  - Cercospora leaf spot (Gray leaf spot)
  - Common rust
  - Northern Leaf Blight
  - Healthy
- Grape
  - Black rot
  - Esca (Black Measles)
  - Leaf blight (Isariopsis Leaf Spot)
  - Healthy
- Potato
  - Early blight
  - Late blight
  - Healthy
- Tomato
  - Bacterial spot
  - Early blight
  - Late blight
  - Leaf Mold
  - Septoria leaf spot
  - Spider mites (Two-spotted spider mite)
  - Target Spot
  - Tomato Yellow Leaf Curl Virus
  - Tomato mosaic virus
  - Healthy
