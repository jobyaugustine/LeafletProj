import os

print(
    os.path.join(
        os.path.split(os.path.abspath(__name__))[0],
        "Working copy2_leaflettry",
        "Export_DataFrame.json"
    )
)
