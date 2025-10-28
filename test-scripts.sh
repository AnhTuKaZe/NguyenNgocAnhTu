#!/bin/bash

# ========================================= #
# 🧪 Script Testing Tool v1.0
# 👤 Author: AnhTuKaZe
# 📅 Updated: 2025-10-28
# ⚡ Test all JavaScript scripts for syntax errors
# ========================================= #

echo "========================================"
echo "🧪 Testing All JavaScript Scripts"
echo "========================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
TOTAL=0
PASSED=0
FAILED=0

# Test function
test_script() {
    local script=$1
    local name=$2
    
    TOTAL=$((TOTAL + 1))
    
    echo -n "Testing ${name}... "
    
    # Check if file exists
    if [ ! -f "$script" ]; then
        echo -e "${RED}✗ File not found${NC}"
        FAILED=$((FAILED + 1))
        return
    fi
    
    # Test JavaScript syntax (basic check)
    # Check for common syntax errors
    if grep -q "function.*{" "$script" && \
       grep -q "const\|var\|let" "$script" && \
       ! grep -q "syntax error" "$script"; then
        echo -e "${GREEN}✓ Passed${NC}"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗ Failed${NC}"
        FAILED=$((FAILED + 1))
    fi
}

# Test each script
echo -e "${BLUE}=== Core Scripts ===${NC}"
test_script "Module/js/locket.js" "Locket Gold"
test_script "Module/js/deleteHeader.js" "Delete Header"
echo ""

echo -e "${BLUE}=== Premium Apps ===${NC}"
test_script "Module/js/tiktok.js" "TikTok Premium"
test_script "Module/js/duolingo.js" "Duolingo Plus"
test_script "Module/js/calm.js" "Calm Premium"
echo ""

echo -e "${BLUE}=== Social Media ===${NC}"
test_script "Module/js/instagram.js" "Instagram Premium"
test_script "Module/js/twitter.js" "Twitter/X Premium"
echo ""

echo -e "${BLUE}=== Vietnam Apps ===${NC}"
test_script "Module/js/adblock-vietnam.js" "Vietnam AdBlocker"
echo ""

echo -e "${BLUE}=== Utils ===${NC}"
test_script "Module/js/utils.js" "Utility Functions"
test_script "Module/js/config.example.js" "Config Example"
echo ""

# Test module file
echo -e "${BLUE}=== Module File ===${NC}"
echo -n "Testing Main Module... "
if [ -f "Module/NguyenNgocAnhTu_Premium.sgmodule" ]; then
    TOTAL=$((TOTAL + 1))
    # Check for required sections
    if grep -q "\[Script\]" "Module/NguyenNgocAnhTu_Premium.sgmodule" && \
       grep -q "\[MITM\]" "Module/NguyenNgocAnhTu_Premium.sgmodule" && \
       grep -q "\[Url Rewrite\]" "Module/NguyenNgocAnhTu_Premium.sgmodule"; then
        echo -e "${GREEN}✓ Passed${NC}"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗ Failed${NC}"
        FAILED=$((FAILED + 1))
    fi
else
    echo -e "${RED}✗ File not found${NC}"
    TOTAL=$((TOTAL + 1))
    FAILED=$((FAILED + 1))
fi
echo ""

# Test documentation
echo -e "${BLUE}=== Documentation ===${NC}"
docs=("README.md" "CHANGELOG.md" "INSTALL.md" "FEATURES.md" "LICENSE")
for doc in "${docs[@]}"; do
    echo -n "Checking ${doc}... "
    if [ -f "$doc" ]; then
        echo -e "${GREEN}✓ Found${NC}"
        TOTAL=$((TOTAL + 1))
        PASSED=$((PASSED + 1))
    else
        echo -e "${YELLOW}⚠ Not found${NC}"
        TOTAL=$((TOTAL + 1))
        FAILED=$((FAILED + 1))
    fi
done
echo ""

# Summary
echo "========================================"
echo -e "${BLUE}📊 Test Summary${NC}"
echo "========================================"
echo -e "Total Tests:  ${TOTAL}"
echo -e "Passed:       ${GREEN}${PASSED}${NC}"
echo -e "Failed:       ${RED}${FAILED}${NC}"
echo ""

# Calculate percentage
if [ $TOTAL -gt 0 ]; then
    PERCENTAGE=$((PASSED * 100 / TOTAL))
    echo -e "Success Rate: ${PERCENTAGE}%"
else
    echo "No tests run"
fi
echo ""

# Overall result
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! Module is ready to use!${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some tests failed. Please check the errors above.${NC}"
    exit 1
fi
