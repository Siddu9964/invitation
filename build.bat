@echo off
echo ========================================
echo SIDDESH ♡ DEEPIKA H B Engagement
echo ========================================
echo.
echo Building and testing the engagement invitation...
echo.

echo Checking files...
if exist "engagement.html" (
    echo ✓ engagement.html found
) else (
    echo ✗ engagement.html missing
    goto :error
)

if exist "styles.css" (
    echo ✓ styles.css found
) else (
    echo ✗ styles.css missing
    goto :error
)

if exist "script.js" (
    echo ✓ script.js found
) else (
    echo ✗ script.js missing
    goto :error
)

echo.
echo All files present! Opening in browser...
echo.

start engagement.html

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo The engagement invitation should now be open in your browser.
echo.
echo Features to test:
echo - Countdown timer should be running
echo - Try clicking the contact, reminder, and details buttons
echo - Test the Add to Calendar, Share, and View Address buttons
echo - Check that it works on mobile devices
echo.
pause
goto :end

:error
echo.
echo ========================================
echo Build failed! Missing required files.
echo ========================================
echo.
pause

:end 